/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp27Component } from './comp-27.component';

describe('Comp27Component', () => {
  let component: Comp27Component;
  let fixture: ComponentFixture<Comp27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
