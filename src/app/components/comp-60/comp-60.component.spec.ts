/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp60Component } from './comp-60.component';

describe('Comp60Component', () => {
  let component: Comp60Component;
  let fixture: ComponentFixture<Comp60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
