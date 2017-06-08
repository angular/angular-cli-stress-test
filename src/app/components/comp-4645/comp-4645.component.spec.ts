/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4645Component } from './comp-4645.component';

describe('Comp4645Component', () => {
  let component: Comp4645Component;
  let fixture: ComponentFixture<Comp4645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
