/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3062Component } from './comp-3062.component';

describe('Comp3062Component', () => {
  let component: Comp3062Component;
  let fixture: ComponentFixture<Comp3062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
