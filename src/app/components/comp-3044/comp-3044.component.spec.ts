/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3044Component } from './comp-3044.component';

describe('Comp3044Component', () => {
  let component: Comp3044Component;
  let fixture: ComponentFixture<Comp3044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
