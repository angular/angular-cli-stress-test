/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3063Component } from './comp-3063.component';

describe('Comp3063Component', () => {
  let component: Comp3063Component;
  let fixture: ComponentFixture<Comp3063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
