/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service42Service } from './service-42.service';

describe('Service42Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service42Service]
    });
  });

  it('should ...', inject([Service42Service], (service: Service42Service) => {
    expect(service).toBeTruthy();
  }));
});
