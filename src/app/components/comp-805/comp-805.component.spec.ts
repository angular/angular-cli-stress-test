/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp805Component } from './comp-805.component';

describe('Comp805Component', () => {
  let component: Comp805Component;
  let fixture: ComponentFixture<Comp805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
