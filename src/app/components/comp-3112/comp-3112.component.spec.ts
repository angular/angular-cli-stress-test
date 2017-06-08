/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3112Component } from './comp-3112.component';

describe('Comp3112Component', () => {
  let component: Comp3112Component;
  let fixture: ComponentFixture<Comp3112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
