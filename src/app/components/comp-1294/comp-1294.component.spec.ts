/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1294Component } from './comp-1294.component';

describe('Comp1294Component', () => {
  let component: Comp1294Component;
  let fixture: ComponentFixture<Comp1294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
