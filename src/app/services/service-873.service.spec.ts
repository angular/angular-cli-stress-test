/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service873Service } from './service-873.service';

describe('Service873Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service873Service]
    });
  });

  it('should ...', inject([Service873Service], (service: Service873Service) => {
    expect(service).toBeTruthy();
  }));
});
