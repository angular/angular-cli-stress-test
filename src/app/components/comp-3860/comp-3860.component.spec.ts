/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3860Component } from './comp-3860.component';

describe('Comp3860Component', () => {
  let component: Comp3860Component;
  let fixture: ComponentFixture<Comp3860Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3860Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
