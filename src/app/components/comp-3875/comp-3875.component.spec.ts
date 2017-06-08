/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3875Component } from './comp-3875.component';

describe('Comp3875Component', () => {
  let component: Comp3875Component;
  let fixture: ComponentFixture<Comp3875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
