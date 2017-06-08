/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3995Component } from './comp-3995.component';

describe('Comp3995Component', () => {
  let component: Comp3995Component;
  let fixture: ComponentFixture<Comp3995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
