/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3025Component } from './comp-3025.component';

describe('Comp3025Component', () => {
  let component: Comp3025Component;
  let fixture: ComponentFixture<Comp3025Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3025Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
