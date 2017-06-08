/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3381Component } from './comp-3381.component';

describe('Comp3381Component', () => {
  let component: Comp3381Component;
  let fixture: ComponentFixture<Comp3381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
