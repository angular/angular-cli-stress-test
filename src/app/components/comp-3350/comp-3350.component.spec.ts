/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3350Component } from './comp-3350.component';

describe('Comp3350Component', () => {
  let component: Comp3350Component;
  let fixture: ComponentFixture<Comp3350Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3350Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
