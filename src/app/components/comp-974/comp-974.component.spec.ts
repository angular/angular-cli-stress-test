/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp974Component } from './comp-974.component';

describe('Comp974Component', () => {
  let component: Comp974Component;
  let fixture: ComponentFixture<Comp974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
