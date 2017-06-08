/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp628Component } from './comp-628.component';

describe('Comp628Component', () => {
  let component: Comp628Component;
  let fixture: ComponentFixture<Comp628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
