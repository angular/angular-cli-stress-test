/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1026Component } from './comp-1026.component';

describe('Comp1026Component', () => {
  let component: Comp1026Component;
  let fixture: ComponentFixture<Comp1026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
