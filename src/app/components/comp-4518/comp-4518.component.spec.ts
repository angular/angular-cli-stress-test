/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4518Component } from './comp-4518.component';

describe('Comp4518Component', () => {
  let component: Comp4518Component;
  let fixture: ComponentFixture<Comp4518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
