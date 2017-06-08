/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3066Component } from './comp-3066.component';

describe('Comp3066Component', () => {
  let component: Comp3066Component;
  let fixture: ComponentFixture<Comp3066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
