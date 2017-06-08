/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp21Component } from './comp-21.component';

describe('Comp21Component', () => {
  let component: Comp21Component;
  let fixture: ComponentFixture<Comp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
