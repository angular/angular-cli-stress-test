/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3249Component } from './comp-3249.component';

describe('Comp3249Component', () => {
  let component: Comp3249Component;
  let fixture: ComponentFixture<Comp3249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
