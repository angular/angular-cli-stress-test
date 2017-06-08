/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1008Component } from './comp-1008.component';

describe('Comp1008Component', () => {
  let component: Comp1008Component;
  let fixture: ComponentFixture<Comp1008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
