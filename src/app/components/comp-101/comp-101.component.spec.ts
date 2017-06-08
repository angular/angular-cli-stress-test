/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp101Component } from './comp-101.component';

describe('Comp101Component', () => {
  let component: Comp101Component;
  let fixture: ComponentFixture<Comp101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
