/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp937Component } from './comp-937.component';

describe('Comp937Component', () => {
  let component: Comp937Component;
  let fixture: ComponentFixture<Comp937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
