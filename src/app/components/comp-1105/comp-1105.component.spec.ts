/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1105Component } from './comp-1105.component';

describe('Comp1105Component', () => {
  let component: Comp1105Component;
  let fixture: ComponentFixture<Comp1105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
