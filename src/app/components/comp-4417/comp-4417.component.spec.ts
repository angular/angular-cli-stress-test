/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4417Component } from './comp-4417.component';

describe('Comp4417Component', () => {
  let component: Comp4417Component;
  let fixture: ComponentFixture<Comp4417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
