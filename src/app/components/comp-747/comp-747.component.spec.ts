/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp747Component } from './comp-747.component';

describe('Comp747Component', () => {
  let component: Comp747Component;
  let fixture: ComponentFixture<Comp747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
