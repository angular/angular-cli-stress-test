/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2562Component } from './comp-2562.component';

describe('Comp2562Component', () => {
  let component: Comp2562Component;
  let fixture: ComponentFixture<Comp2562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
