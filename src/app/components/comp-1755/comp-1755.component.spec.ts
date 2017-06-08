/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1755Component } from './comp-1755.component';

describe('Comp1755Component', () => {
  let component: Comp1755Component;
  let fixture: ComponentFixture<Comp1755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
