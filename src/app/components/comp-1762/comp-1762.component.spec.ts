/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1762Component } from './comp-1762.component';

describe('Comp1762Component', () => {
  let component: Comp1762Component;
  let fixture: ComponentFixture<Comp1762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
