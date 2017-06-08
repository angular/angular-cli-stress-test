/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp462Component } from './comp-462.component';

describe('Comp462Component', () => {
  let component: Comp462Component;
  let fixture: ComponentFixture<Comp462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
