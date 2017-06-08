/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3371Component } from './comp-3371.component';

describe('Comp3371Component', () => {
  let component: Comp3371Component;
  let fixture: ComponentFixture<Comp3371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
