/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service213Service } from './service-213.service';

describe('Service213Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service213Service]
    });
  });

  it('should ...', inject([Service213Service], (service: Service213Service) => {
    expect(service).toBeTruthy();
  }));
});
