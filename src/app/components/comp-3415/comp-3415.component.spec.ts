/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3415Component } from './comp-3415.component';

describe('Comp3415Component', () => {
  let component: Comp3415Component;
  let fixture: ComponentFixture<Comp3415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
