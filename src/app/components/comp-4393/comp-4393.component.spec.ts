/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4393Component } from './comp-4393.component';

describe('Comp4393Component', () => {
  let component: Comp4393Component;
  let fixture: ComponentFixture<Comp4393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
