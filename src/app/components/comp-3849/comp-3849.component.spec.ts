/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3849Component } from './comp-3849.component';

describe('Comp3849Component', () => {
  let component: Comp3849Component;
  let fixture: ComponentFixture<Comp3849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
