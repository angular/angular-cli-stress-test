/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3738Component } from './comp-3738.component';

describe('Comp3738Component', () => {
  let component: Comp3738Component;
  let fixture: ComponentFixture<Comp3738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
