/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1236Component } from './comp-1236.component';

describe('Comp1236Component', () => {
  let component: Comp1236Component;
  let fixture: ComponentFixture<Comp1236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
