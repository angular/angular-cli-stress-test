/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4963Component } from './comp-4963.component';

describe('Comp4963Component', () => {
  let component: Comp4963Component;
  let fixture: ComponentFixture<Comp4963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
