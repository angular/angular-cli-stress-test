/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3030Component } from './comp-3030.component';

describe('Comp3030Component', () => {
  let component: Comp3030Component;
  let fixture: ComponentFixture<Comp3030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
