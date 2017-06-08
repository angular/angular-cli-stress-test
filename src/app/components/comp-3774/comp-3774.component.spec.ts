/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3774Component } from './comp-3774.component';

describe('Comp3774Component', () => {
  let component: Comp3774Component;
  let fixture: ComponentFixture<Comp3774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
