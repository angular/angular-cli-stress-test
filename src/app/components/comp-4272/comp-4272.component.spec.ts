/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4272Component } from './comp-4272.component';

describe('Comp4272Component', () => {
  let component: Comp4272Component;
  let fixture: ComponentFixture<Comp4272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
