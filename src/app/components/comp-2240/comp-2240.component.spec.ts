/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2240Component } from './comp-2240.component';

describe('Comp2240Component', () => {
  let component: Comp2240Component;
  let fixture: ComponentFixture<Comp2240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
