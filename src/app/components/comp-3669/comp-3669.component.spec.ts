/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3669Component } from './comp-3669.component';

describe('Comp3669Component', () => {
  let component: Comp3669Component;
  let fixture: ComponentFixture<Comp3669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
