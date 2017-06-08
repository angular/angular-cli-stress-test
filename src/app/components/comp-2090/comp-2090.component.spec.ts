/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2090Component } from './comp-2090.component';

describe('Comp2090Component', () => {
  let component: Comp2090Component;
  let fixture: ComponentFixture<Comp2090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
