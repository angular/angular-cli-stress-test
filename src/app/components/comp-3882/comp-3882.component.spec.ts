/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3882Component } from './comp-3882.component';

describe('Comp3882Component', () => {
  let component: Comp3882Component;
  let fixture: ComponentFixture<Comp3882Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3882Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
