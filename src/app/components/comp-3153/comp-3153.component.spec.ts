/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3153Component } from './comp-3153.component';

describe('Comp3153Component', () => {
  let component: Comp3153Component;
  let fixture: ComponentFixture<Comp3153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
