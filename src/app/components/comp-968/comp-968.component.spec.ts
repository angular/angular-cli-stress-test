/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp968Component } from './comp-968.component';

describe('Comp968Component', () => {
  let component: Comp968Component;
  let fixture: ComponentFixture<Comp968Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp968Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
