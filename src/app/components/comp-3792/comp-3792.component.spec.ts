/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3792Component } from './comp-3792.component';

describe('Comp3792Component', () => {
  let component: Comp3792Component;
  let fixture: ComponentFixture<Comp3792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
