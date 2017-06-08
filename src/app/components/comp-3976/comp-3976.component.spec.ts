/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3976Component } from './comp-3976.component';

describe('Comp3976Component', () => {
  let component: Comp3976Component;
  let fixture: ComponentFixture<Comp3976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
